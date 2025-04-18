import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
// import Auth from './components/email'
import { View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'
import AuthOption from './components/authoption'

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      {/* <Auth />
      {session && session.user && <Text>{session.user.id}</Text>} */}

      <AuthOption />
    </View>
  )
}
