
import { createContext, ReactNode, useState, useEffect } from "react";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { api } from "../servers/api";

WebBrowser.maybeCompleteAuthSession()

interface UserProps {
    name: string
    avatar: string

}

export interface AuthContextDataProps {
    user: UserProps
    isUserLoading: boolean
    signIn: () => Promise<void>
}

interface AuthPrividerProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthPrividerProps) {
    const [isUserLoading, setIsUserLoading] = useState(false)
    const [user, setUser] = useState<UserProps>({} as UserProps)

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: process.env.CLIENT_ID,
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    })

    async function signIn() {
        try {
            setIsUserLoading(true)
            await promptAsync()
        } catch (error) {
            console.log(error);
            throw error

        } finally {
            setIsUserLoading(false)
        }
    }

    async function sigInWithGoogle(access_token: string) {
        try {
            setIsUserLoading(true)
            const tokenResponse = await api.post("/users", { access_token })
            api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`
            
            const userInfoResponse = await api.get('/me')
            setUser(userInfoResponse.data.user);
            
        } catch (err) {
            console.log(err);
            throw err
        } finally {
            setIsUserLoading(false)
        }

    }
    useEffect(() => {
        if (response?.type === "success" && response.authentication?.accessToken) {
            sigInWithGoogle(response.authentication.accessToken)
        }
    }, [response])
    return (
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}