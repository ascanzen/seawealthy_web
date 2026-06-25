import { useState, useCallback, useEffect } from 'react';

interface LoginState {
  isLoggedIn: boolean;
  toast: string | null;
}

export function useLogin() {
  const [state, setState] = useState<LoginState>(() => {
    const saved = localStorage.getItem('hypt_login');
    return {
      isLoggedIn: saved ? JSON.parse(saved).isLoggedIn : false,
      toast: null,
    };
  });

  useEffect(() => {
    localStorage.setItem('hypt_login', JSON.stringify({ isLoggedIn: state.isLoggedIn }));
  }, [state.isLoggedIn]);

  useEffect(() => {
    if (state.toast) {
      const timer = setTimeout(() => setState(s => ({ ...s, toast: null })), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.toast]);

  const login = useCallback(() => {
    setState({ isLoggedIn: true, toast: '登录成功！' });
  }, []);

  const logout = useCallback(() => {
    setState({ isLoggedIn: false, toast: null });
    localStorage.removeItem('hypt_login');
  }, []);

  const clearToast = useCallback(() => {
    setState(s => ({ ...s, toast: null }));
  }, []);

  return { state, login, logout, clearToast };
}
