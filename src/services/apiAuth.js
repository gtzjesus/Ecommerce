import supabase from './supabase';

// API SIGNUP INTO SUPABASE
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

// API LOGIN TO SUPABASE
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// API LOGOUT TO SUPABASE
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

// ON EACH RELOAD, USER RE-FETCH TO STAY AUTHENTICATED
export async function getCurrentUser() {
  // GET DATA FROM LOCAL STORAGE APP
  const { data: session } = await supabase.auth.getSession();
  // CHECK for A SESSION
  if (!session.session) return null;

  // REDOWNLOAD FROM supabase
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  // RETURN JUST THE USER
  return data?.user;
}
