import { useEffect, useState } from 'react';
import {  signInAnonymously, onAuthStateChanged, setPersistence, browserLocalPersistence} from 'firebase/auth';
import { Auth } from '@/interfaces/auth-interface';
import { auth } from '@/firebase';
import { useAuthContext } from '@/context/auth-context';

export default function useUserAuth() {
    const [user, setUser] = useState<null | Auth>(null);
    const [loading, setLoading] = useState(true);
    const {user: session} = useAuthContext()
  
    useEffect(() => {
  
      // Configurar la persistencia a nivel local
      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          // Verificar si el usuario está autenticado
          const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
              setUser({
                id: authUser.uid,
                email: authUser.email,
                isAnonymous: authUser.isAnonymous,
              });
            }
            setLoading(false);
          });
  
          // Si el usuario no está autenticado, realizar autenticación anónima
          if (!session && !user) {
            signInAnonymously(auth)
              .then((userCredential) => {
                const authUser = userCredential.user;
                setUser({
                  id: authUser.uid,
                  email: authUser.email,
                  isAnonymous: authUser.isAnonymous,
                });
                setLoading(false);
              })
              .catch((error) => {
                console.error('Error en la autenticación anónima:', error);
                setLoading(false);
              });
          } else if (session) {
            // Si hay una sesión de NextAuth, establecer el usuario
            setUser({
              id: session.uid,
              email: session.email,
              isAnonymous: false
            });
          }
  
          // Cleanup al desmontar el componente
          return () => unsubscribe();
        })
        .catch((error: any) => {
          console.error('Error al configurar la persistencia:', error);
          setLoading(false);
        });
    }, [session, user]);
  
    return { user, loading };
  }