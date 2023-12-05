SET check_function_bodies = false;
SELECT pg_catalog.setval('public.users_id_seq', 1, false);
INSERT INTO public.users (first_name, last_name, birthday) VALUES ('Admin', 'Admin', '2023-09-20');