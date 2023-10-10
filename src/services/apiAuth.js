import supabase from './supabase';

// API LOGIN TO SUPABASE
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// ON EACH RELOAD, USER RE-FETCH TO STAY AUTHENTICATED
export async function getCurrentUser() {
  // GET DATA FROM LOCAL STORAGE APP
  const { data: session } = await supabase.auth.getSession();
  // CHECK for A SESSION
  if (!session.session) return null;

  // REDOWNLOAD FROM supabase
  const { data, error } = await supabase.auth.getUser();

  console.log(data);

  if (error) throw new Error(error.message);

  // RETURN JUST THE USER
  return data?.user;
}
