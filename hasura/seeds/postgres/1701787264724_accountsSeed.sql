SET check_function_bodies = false;
SELECT pg_catalog.setval('public.accounts_id_seq', 1, false);
INSERT INTO public.accounts (user_id, is_active, email, username, hashed_password) VALUES ('1', 'true', 'admin@example.com', 'admin', '$2a$10$5v29j7762WXZL8/fvSV2aucGyFXq1expZafVWigeCrzSP4oIt3jGu');
-- Default Password: P@ssw0rd!
