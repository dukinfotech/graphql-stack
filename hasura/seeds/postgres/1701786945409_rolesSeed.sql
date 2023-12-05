SET check_function_bodies = false;
SELECT pg_catalog.setval('public.roles_id_seq', 1, false);
INSERT INTO public.roles (name) VALUES ('Admin');
INSERT INTO public.roles (name) VALUES ('Manager');
INSERT INTO public.roles (name) VALUES ('User');
