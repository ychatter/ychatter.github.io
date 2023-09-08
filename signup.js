// Import the Supabase client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@1.12.0';

// Initialize the Supabase client with your Supabase project URL and public API key
const supabase = createClient('https://sinwaxncwvyrsznnqotl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbndheG5jd3Z5cnN6bm5xb3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNTY0MzUsImV4cCI6MjAwOTczMjQzNX0.9Nm0gJDE7_sZQt_IvlGtaLRu8qdd9AtU_7oigJf-3WE');

// Now you can use the supabase object for authentication and other Supabase services

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.error('Error during signup:', error.message);
                return;
            }

            // Registration successful, user data is stored in the auth.users table
            window.location.href = 'login.html'; // Redirect to the login page
        } catch (error) {
            console.error('Error during signup:', error.message);
        }
    });
});
