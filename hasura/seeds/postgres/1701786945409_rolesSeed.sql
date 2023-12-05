SET check_function_bodies = false;
SELECT pg_catalog.setval('public.roles_id_seq', 1, false);
INSERT INTO public.roles (name) VALUES ('admin');
INSERT INTO public.roles (name) VALUES ('manager');
INSERT INTO public.roles (name) VALUES ('user');
