--
-- PostgreSQL database dump
--

-- Dumped from database version 9.3.25
-- Dumped by pg_dump version 9.3.25
-- Started on 2025-10-12 10:50:35

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 2188 (class 1262 OID 41505)
-- Name: vulkanis_party; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE vulkanis_party WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Venezuela.1252' LC_CTYPE = 'Spanish_Venezuela.1252';


ALTER DATABASE vulkanis_party OWNER TO postgres;

\connect vulkanis_party

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 1 (class 3079 OID 11750)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2191 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- TOC entry 2 (class 3079 OID 41577)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 2192 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 185 (class 1259 OID 41843)
-- Name: actualizaciones_evento; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.actualizaciones_evento (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    tipo character varying(50) NOT NULL,
    mensaje text NOT NULL,
    "fechaHora" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    "latitudUbicacion" numeric(9,6),
    "longitudUbicacion" numeric(9,6),
    "createdAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    id_evento uuid,
    id_servicio uuid,
    id_ubicacion uuid
);


ALTER TABLE public.actualizaciones_evento OWNER TO postgres;

--
-- TOC entry 179 (class 1259 OID 41703)
-- Name: disponibilidad_personal; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.disponibilidad_personal (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    id_personal uuid,
    fecha date NOT NULL,
    hora_inicio time without time zone NOT NULL,
    hora_fin time without time zone NOT NULL,
    esta_disponible boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.disponibilidad_personal OWNER TO postgres;

--
-- TOC entry 180 (class 1259 OID 41717)
-- Name: eventos; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.eventos (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    id_cliente uuid,
    id_asesor uuid,
    id_productor uuid,
    estado character varying(30) DEFAULT 'cotizacion'::character varying NOT NULL,
    notas text,
    "nombreEvento" character varying(100) NOT NULL,
    "fechaEvento" date NOT NULL,
    "horaInicio" time without time zone NOT NULL,
    "horaFin" time without time zone NOT NULL,
    "nombreUbicacion" character varying(100) NOT NULL,
    "direccionUbicacion" text NOT NULL,
    "precioTotal" numeric(10,2) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL
);


ALTER TABLE public.eventos OWNER TO postgres;

--
-- TOC entry 177 (class 1259 OID 41663)
-- Name: inventario_servicio; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.inventario_servicio (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    id_servicio uuid,
    estado character varying(30) DEFAULT 'disponible'::character varying NOT NULL,
    ubicacion text,
    "numeroSerie" text,
    "createdAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL
);


ALTER TABLE public.inventario_servicio OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 41889)
-- Name: notificaciones; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.notificaciones (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    tipo character varying(50),
    mensaje text NOT NULL,
    leida boolean DEFAULT false NOT NULL,
    "idUsuario" uuid NOT NULL,
    "idEntidadRelacionada" uuid,
    "createdAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL
);


ALTER TABLE public.notificaciones OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 41804)
-- Name: oportunidades; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.oportunidades (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    nombre_cliente character varying(100),
    correo_cliente character varying(100),
    telefono_cliente character varying(20),
    fuente character varying(30),
    estado character varying(30) DEFAULT 'nuevo'::character varying NOT NULL,
    id_asesor_asignado uuid,
    notas text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.oportunidades OWNER TO postgres;

--
-- TOC entry 182 (class 1259 OID 41776)
-- Name: pagos; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.pagos (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    id_evento uuid,
    id_cliente uuid,
    monto numeric(10,2) NOT NULL,
    fecha_pago timestamp with time zone DEFAULT now() NOT NULL,
    metodo_pago character varying(30),
    id_transaccion text,
    estado character varying(30) DEFAULT 'pendiente'::character varying NOT NULL,
    id_confirmado_por uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.pagos OWNER TO postgres;

--
-- TOC entry 178 (class 1259 OID 41681)
-- Name: perfiles_personal; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.perfiles_personal (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    id_usuario uuid,
    id_servicio uuid,
    especialidad character varying(100),
    descripcion text,
    "tarifaPorHora" numeric(10,2),
    "urlsPortafolio" json,
    "estaDisponible" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL
);


ALTER TABLE public.perfiles_personal OWNER TO postgres;

--
-- TOC entry 174 (class 1259 OID 41620)
-- Name: permisos; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.permisos (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    nombre character varying(50) NOT NULL,
    descripcion text
);


ALTER TABLE public.permisos OWNER TO postgres;

--
-- TOC entry 175 (class 1259 OID 41633)
-- Name: rol_permisos; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.rol_permisos (
    id_rol uuid NOT NULL,
    id_permiso uuid NOT NULL
);


ALTER TABLE public.rol_permisos OWNER TO postgres;

--
-- TOC entry 172 (class 1259 OID 41588)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.roles (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    descripcion text,
    "createdAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    nombre character varying(50) NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 46095)
-- Name: servicio; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.servicio (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    tipo character varying(50) NOT NULL,
    "precioBase" numeric(10,2),
    "unidadPrecio" character varying(30),
    "duracionMinimaHoras" integer,
    "unidadesMinimas" integer,
    "requiereOperador" boolean DEFAULT false NOT NULL,
    "requiereTransporte" boolean DEFAULT false NOT NULL,
    "controladoInventario" boolean DEFAULT false NOT NULL,
    "urlsImagenes" json,
    "estaActivo" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    "valoracionPromedio" numeric(3,2) DEFAULT 0::numeric
);


ALTER TABLE public.servicio OWNER TO postgres;

--
-- TOC entry 176 (class 1259 OID 41648)
-- Name: servicios; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.servicios (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    tipo character varying(50) NOT NULL,
    precio_base numeric(10,2),
    unidad_precio character varying(30),
    duracion_minima_horas integer,
    unidades_minimas integer,
    requiere_operador boolean DEFAULT false NOT NULL,
    requiere_transporte boolean DEFAULT false NOT NULL,
    controlado_inventario boolean DEFAULT false NOT NULL,
    urls_imagenes json,
    esta_activo boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    valoracion_promedio numeric[]
);


ALTER TABLE public.servicios OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 41744)
-- Name: servicios_evento; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.servicios_evento (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    id_evento uuid,
    id_servicio uuid,
    cantidad integer,
    id_personal_asignado uuid,
    id_equipo_asignado uuid,
    estado character varying(30) DEFAULT 'pendiente'::character varying NOT NULL,
    notas text,
    "duracionHoras" integer,
    "precioServicio" numeric(10,2) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL
);


ALTER TABLE public.servicios_evento OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 41864)
-- Name: sesiones_streaming; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.sesiones_streaming (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    id_evento uuid,
    id_operador uuid,
    url_sesion text NOT NULL,
    hora_inicio timestamp with time zone,
    hora_fin timestamp with time zone,
    estado character varying(30) DEFAULT 'programado'::character varying NOT NULL,
    grabacion_solicitada boolean DEFAULT false NOT NULL,
    url_video_resumen text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.sesiones_streaming OWNER TO postgres;

--
-- TOC entry 184 (class 1259 OID 41821)
-- Name: solicitudes_transporte; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.solicitudes_transporte (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    id_evento uuid,
    tipo_transporte character varying(30),
    ubicacion_recogida text,
    ubicacion_entrega text,
    hora_recogida timestamp with time zone,
    hora_entrega timestamp with time zone,
    id_transportista_asignado uuid,
    costo_estimado numeric(10,2),
    costo_real numeric(10,2),
    estado character varying(30) DEFAULT 'pendiente'::character varying NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.solicitudes_transporte OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 49697)
-- Name: ubicaciones_transportista; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.ubicaciones_transportista (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "idSolicitudTransporte" uuid NOT NULL,
    "idUsuario" uuid NOT NULL,
    latitud numeric(9,6) NOT NULL,
    longitud numeric(9,6) NOT NULL,
    descripcion text,
    "createdAt" timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL
);


ALTER TABLE public.ubicaciones_transportista OWNER TO postgres;

--
-- TOC entry 173 (class 1259 OID 41601)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.usuarios (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    correo_electronico character varying(100) NOT NULL,
    hash_contrasena text NOT NULL,
    nombre character varying(50) NOT NULL,
    apellido character varying(50),
    numero_telefono character varying(20),
    direccion text,
    id_rol uuid NOT NULL,
    estado character varying(20) DEFAULT 'pendiente'::character varying NOT NULL,
    url_foto_perfil text,
    created_at timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL,
    updated_at timestamp with time zone DEFAULT '2025-07-19 09:46:29.201-04'::timestamp with time zone NOT NULL
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 2178 (class 0 OID 41843)
-- Dependencies: 185
-- Data for Name: actualizaciones_evento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.actualizaciones_evento (id, tipo, mensaje, "fechaHora", "latitudUbicacion", "longitudUbicacion", "createdAt", id_evento, id_servicio, id_ubicacion) FROM stdin;
\.


--
-- TOC entry 2172 (class 0 OID 41703)
-- Dependencies: 179
-- Data for Name: disponibilidad_personal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.disponibilidad_personal (id, id_personal, fecha, hora_inicio, hora_fin, esta_disponible, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 2173 (class 0 OID 41717)
-- Dependencies: 180
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.eventos (id, id_cliente, id_asesor, id_productor, estado, notas, "nombreEvento", "fechaEvento", "horaInicio", "horaFin", "nombreUbicacion", "direccionUbicacion", "precioTotal", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 2170 (class 0 OID 41663)
-- Dependencies: 177
-- Data for Name: inventario_servicio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inventario_servicio (id, id_servicio, estado, ubicacion, "numeroSerie", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 2180 (class 0 OID 41889)
-- Dependencies: 187
-- Data for Name: notificaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.notificaciones (id, tipo, mensaje, leida, "idUsuario", "idEntidadRelacionada", "createdAt") FROM stdin;
\.


--
-- TOC entry 2176 (class 0 OID 41804)
-- Dependencies: 183
-- Data for Name: oportunidades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.oportunidades (id, nombre_cliente, correo_cliente, telefono_cliente, fuente, estado, id_asesor_asignado, notas, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 2175 (class 0 OID 41776)
-- Dependencies: 182
-- Data for Name: pagos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pagos (id, id_evento, id_cliente, monto, fecha_pago, metodo_pago, id_transaccion, estado, id_confirmado_por, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 2171 (class 0 OID 41681)
-- Dependencies: 178
-- Data for Name: perfiles_personal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.perfiles_personal (id, id_usuario, id_servicio, especialidad, descripcion, "tarifaPorHora", "urlsPortafolio", "estaDisponible", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 2167 (class 0 OID 41620)
-- Dependencies: 174
-- Data for Name: permisos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permisos (id, nombre, descripcion) FROM stdin;
\.


--
-- TOC entry 2168 (class 0 OID 41633)
-- Dependencies: 175
-- Data for Name: rol_permisos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rol_permisos (id_rol, id_permiso) FROM stdin;
\.


--
-- TOC entry 2165 (class 0 OID 41588)
-- Dependencies: 172
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, descripcion, "createdAt", "updatedAt", nombre) FROM stdin;
2bf16e6a-35f5-4c8b-a4bd-1e7af1794404	Acceso completo al sistema	2025-07-19 09:46:29.201-04	2025-07-19 09:46:29.201-04	Administrador
4cdc121b-527e-48e1-9b6a-3af71a74bc71	Gestiona cotizaciones y eventos	2025-07-19 09:46:29.201-04	2025-07-19 09:46:29.201-04	Asesor
e796d03b-b0fe-4fd1-93a2-55c036f697a4	Solicita cotizaciones y eventos	2025-07-19 09:46:29.201-04	2025-07-19 09:46:29.201-04	Cliente
2a684348-7079-46e2-b54f-01cfd93f8d30	Gestiona eventos y servicios	2025-07-19 09:46:29.201-04	2025-07-19 09:46:29.201-04	Productor
27478b10-afc5-4eda-880c-061cd9d11d15	Gestiona traslados de equipos	2025-07-19 09:46:29.201-04	2025-07-19 09:46:29.201-04	Transportista
\.


--
-- TOC entry 2181 (class 0 OID 46095)
-- Dependencies: 188
-- Data for Name: servicio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.servicio (id, nombre, descripcion, tipo, "precioBase", "unidadPrecio", "duracionMinimaHoras", "unidadesMinimas", "requiereOperador", "requiereTransporte", "controladoInventario", "urlsImagenes", "estaActivo", "createdAt", "updatedAt", "valoracionPromedio") FROM stdin;
\.


--
-- TOC entry 2169 (class 0 OID 41648)
-- Dependencies: 176
-- Data for Name: servicios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.servicios (id, nombre, descripcion, tipo, precio_base, unidad_precio, duracion_minima_horas, unidades_minimas, requiere_operador, requiere_transporte, controlado_inventario, urls_imagenes, esta_activo, created_at, updated_at, valoracion_promedio) FROM stdin;
8e0ffa3d-4393-47df-a2be-6bd392bfd9bc	Pista de Baile Iluminada	Pista de baile con luces LED y sonido	pista_baile	800000.00	por_evento	2	1	f	t	t	["/servicios/servicio1.jpg"]	t	2025-07-19 11:18:20.31-04	2025-07-19 11:18:20.31-04	\N
b81bc268-9220-460e-b571-c377f96eef13	Show de Magia	Show interactivo para niños	entretenimiento	600000.00	por_evento	1	1	t	f	f	["/servicios/servicio2.jpg"]	t	2025-07-19 11:18:20.31-04	2025-07-19 11:18:20.31-04	\N
7c5bceb4-b5eb-4046-8aa9-cad9d0f10b8e	Inflable Gigante	Inflable de 10m x 10m	inflable	1000000.00	por_evento	4	1	f	t	t	["/servicios/servicio3.jpg"]	t	2025-07-19 11:18:20.31-04	2025-07-19 11:18:20.31-04	\N
0a9a9d96-a0ad-4052-abce-285b4396549c	Decoración Temática	Decoración personalizada para cumpleaños	decoracion	500000.00	por_evento	4	1	f	t	t	["/servicios/servicio4.jpg"]	t	2025-07-19 11:18:20.31-04	2025-07-19 11:18:20.31-04	\N
a74ad694-5263-4b80-b314-a9aefb3e2349	Catering Infantil	Comida temática para niños	comida	400000.00	por_evento	4	1	f	t	t	["/servicios/servicio5.jpg"]	t	2025-07-19 11:18:20.31-04	2025-07-19 11:18:20.31-04	\N
3ff75398-4fdd-45f0-b73c-72e168225e6e	Fotógrafo	Fotografía profesional para eventos	fotografia	350000.00	por_hora	2	1	t	t	t	["/servicios/servicio6.jpg"]	t	2025-07-19 11:18:20.31-04	2025-07-19 11:18:20.31-04	\N
afb1a403-3dda-4043-9b31-f495f54eeffc	Cama Elástica	Cama elástica de 4m	cama	1000000.00	por_evento	4	1	t	t	t	["/servicios/servicio7.jpg"]	t	2025-07-19 11:29:06.379-04	2025-07-19 11:29:06.379-04	\N
\.


--
-- TOC entry 2174 (class 0 OID 41744)
-- Dependencies: 181
-- Data for Name: servicios_evento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.servicios_evento (id, id_evento, id_servicio, cantidad, id_personal_asignado, id_equipo_asignado, estado, notas, "duracionHoras", "precioServicio", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 2179 (class 0 OID 41864)
-- Dependencies: 186
-- Data for Name: sesiones_streaming; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sesiones_streaming (id, id_evento, id_operador, url_sesion, hora_inicio, hora_fin, estado, grabacion_solicitada, url_video_resumen, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 2177 (class 0 OID 41821)
-- Dependencies: 184
-- Data for Name: solicitudes_transporte; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.solicitudes_transporte (id, id_evento, tipo_transporte, ubicacion_recogida, ubicacion_entrega, hora_recogida, hora_entrega, id_transportista_asignado, costo_estimado, costo_real, estado, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 2182 (class 0 OID 49697)
-- Dependencies: 189
-- Data for Name: ubicaciones_transportista; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ubicaciones_transportista (id, "idSolicitudTransporte", "idUsuario", latitud, longitud, descripcion, "createdAt") FROM stdin;
\.


--
-- TOC entry 2166 (class 0 OID 41601)
-- Dependencies: 173
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, correo_electronico, hash_contrasena, nombre, apellido, numero_telefono, direccion, id_rol, estado, url_foto_perfil, created_at, updated_at) FROM stdin;
a725f2aa-669f-439f-b858-1be17def339b	cliente1@vulkanis.com	hash_seguro_cliente1	María	Pérez	04123456789	Chacao, Caracas	e796d03b-b0fe-4fd1-93a2-55c036f697a4	activo	\N	2025-07-19 09:46:29.201-04	2025-07-19 09:46:29.201-04
fab1fa91-49e4-4554-b170-23de5334472c	asesor1@vulkanis.com	hash_seguro_asesor1	Carlos	Mendoza	04129876543	El Hatillo, Caracas	4cdc121b-527e-48e1-9b6a-3af71a74bc71	activo	\N	2025-07-19 09:46:29.201-04	2025-07-19 09:46:29.201-04
d6d29abb-8154-4555-b4f8-166d00899eb1	productor1@vulkanis.com	hash_seguro_productor1	Laura	Díaz	04141234567	La Vega, Caracas	2a684348-7079-46e2-b54f-01cfd93f8d30	activo	\N	2025-07-19 09:46:29.201-04	2025-07-19 09:46:29.201-04
f9193f99-5f58-4110-85c5-d2f29433b42a	admin@vulkanis.com	hash_seguro_admin1	Admin	Principal	04149876543	Caracas	2bf16e6a-35f5-4c8b-a4bd-1e7af1794404	activo	\N	2025-07-19 09:46:29.201-04	2025-07-19 09:46:29.201-04
\.


--
-- TOC entry 2032 (class 2606 OID 49706)
-- Name: PK_a45d3dacfc4bde588977518780e; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.ubicaciones_transportista
    ADD CONSTRAINT "PK_a45d3dacfc4bde588977518780e" PRIMARY KEY (id);


--
-- TOC entry 2030 (class 2606 OID 46109)
-- Name: PK_a589f335f4fc94f913c9f86e608; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT "PK_a589f335f4fc94f913c9f86e608" PRIMARY KEY (id);


--
-- TOC entry 2004 (class 2606 OID 46127)
-- Name: UQ_9c51ad942e4ff785a3fb8221b04; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.inventario_servicio
    ADD CONSTRAINT "UQ_9c51ad942e4ff785a3fb8221b04" UNIQUE ("numeroSerie");


--
-- TOC entry 1986 (class 2606 OID 42003)
-- Name: UQ_a5be7aa67e759e347b1c6464e10; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT "UQ_a5be7aa67e759e347b1c6464e10" UNIQUE (nombre);


--
-- TOC entry 2022 (class 2606 OID 41853)
-- Name: actualizaciones_evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.actualizaciones_evento
    ADD CONSTRAINT actualizaciones_evento_pkey PRIMARY KEY (id);


--
-- TOC entry 2010 (class 2606 OID 41711)
-- Name: disponibilidad_personal_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.disponibilidad_personal
    ADD CONSTRAINT disponibilidad_personal_pkey PRIMARY KEY (id);


--
-- TOC entry 2012 (class 2606 OID 41728)
-- Name: eventos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_pkey PRIMARY KEY (id);


--
-- TOC entry 2006 (class 2606 OID 41673)
-- Name: inventario_servicio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.inventario_servicio
    ADD CONSTRAINT inventario_servicio_pkey PRIMARY KEY (id);


--
-- TOC entry 2028 (class 2606 OID 41899)
-- Name: notificaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.notificaciones
    ADD CONSTRAINT notificaciones_pkey PRIMARY KEY (id);


--
-- TOC entry 2018 (class 2606 OID 41815)
-- Name: oportunidades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.oportunidades
    ADD CONSTRAINT oportunidades_pkey PRIMARY KEY (id);


--
-- TOC entry 2016 (class 2606 OID 41788)
-- Name: pagos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_pkey PRIMARY KEY (id);


--
-- TOC entry 2008 (class 2606 OID 41692)
-- Name: perfiles_personal_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.perfiles_personal
    ADD CONSTRAINT perfiles_personal_pkey PRIMARY KEY (id);


--
-- TOC entry 1994 (class 2606 OID 41632)
-- Name: permisos_nombre_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.permisos
    ADD CONSTRAINT permisos_nombre_key UNIQUE (nombre);


--
-- TOC entry 1996 (class 2606 OID 41630)
-- Name: permisos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.permisos
    ADD CONSTRAINT permisos_pkey PRIMARY KEY (id);


--
-- TOC entry 2000 (class 2606 OID 41637)
-- Name: rol_permisos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.rol_permisos
    ADD CONSTRAINT rol_permisos_pkey PRIMARY KEY (id_rol, id_permiso);


--
-- TOC entry 1988 (class 2606 OID 41598)
-- Name: roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 2014 (class 2606 OID 41755)
-- Name: servicios_evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.servicios_evento
    ADD CONSTRAINT servicios_evento_pkey PRIMARY KEY (id);


--
-- TOC entry 2002 (class 2606 OID 41662)
-- Name: servicios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.servicios
    ADD CONSTRAINT servicios_pkey PRIMARY KEY (id);


--
-- TOC entry 2024 (class 2606 OID 41876)
-- Name: sesiones_streaming_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.sesiones_streaming
    ADD CONSTRAINT sesiones_streaming_pkey PRIMARY KEY (id);


--
-- TOC entry 2026 (class 2606 OID 41878)
-- Name: sesiones_streaming_url_sesion_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.sesiones_streaming
    ADD CONSTRAINT sesiones_streaming_url_sesion_key UNIQUE (url_sesion);


--
-- TOC entry 2020 (class 2606 OID 41832)
-- Name: solicitudes_transporte_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.solicitudes_transporte
    ADD CONSTRAINT solicitudes_transporte_pkey PRIMARY KEY (id);


--
-- TOC entry 1990 (class 2606 OID 41614)
-- Name: usuarios_correo_electronico_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_correo_electronico_key UNIQUE (correo_electronico);


--
-- TOC entry 1992 (class 2606 OID 41612)
-- Name: usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 1997 (class 1259 OID 42012)
-- Name: IDX_4f6669e20f438ece7f6bdaece6; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "IDX_4f6669e20f438ece7f6bdaece6" ON public.rol_permisos USING btree (id_permiso);


--
-- TOC entry 1998 (class 1259 OID 42013)
-- Name: IDX_7fa2b962d448a87d05b77a1f22; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "IDX_7fa2b962d448a87d05b77a1f22" ON public.rol_permisos USING btree (id_rol);


--
-- TOC entry 2043 (class 2606 OID 46223)
-- Name: FK_03ad49a5e8955baccc36fbd4fe9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.servicios_evento
    ADD CONSTRAINT "FK_03ad49a5e8955baccc36fbd4fe9" FOREIGN KEY (id_evento) REFERENCES public.eventos(id);


--
-- TOC entry 2055 (class 2606 OID 49758)
-- Name: FK_2e9d2933c794140b4c873a16c85; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actualizaciones_evento
    ADD CONSTRAINT "FK_2e9d2933c794140b4c873a16c85" FOREIGN KEY (id_ubicacion) REFERENCES public.ubicaciones_transportista(id);


--
-- TOC entry 2040 (class 2606 OID 46193)
-- Name: FK_329f9548162e1c51ee5192a3e02; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT "FK_329f9548162e1c51ee5192a3e02" FOREIGN KEY (id_cliente) REFERENCES public.usuarios(id);


--
-- TOC entry 2038 (class 2606 OID 46218)
-- Name: FK_489480fea318911bd0f4d130c76; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.perfiles_personal
    ADD CONSTRAINT "FK_489480fea318911bd0f4d130c76" FOREIGN KEY (id_servicio) REFERENCES public.servicio(id) ON DELETE SET NULL;


--
-- TOC entry 2034 (class 2606 OID 42014)
-- Name: FK_4f6669e20f438ece7f6bdaece60; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol_permisos
    ADD CONSTRAINT "FK_4f6669e20f438ece7f6bdaece60" FOREIGN KEY (id_permiso) REFERENCES public.permisos(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2042 (class 2606 OID 46203)
-- Name: FK_6379b6f4f59188bee9f6b332cd7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT "FK_6379b6f4f59188bee9f6b332cd7" FOREIGN KEY (id_productor) REFERENCES public.usuarios(id);


--
-- TOC entry 2044 (class 2606 OID 46228)
-- Name: FK_76e1241c67c7d679c363819b44e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.servicios_evento
    ADD CONSTRAINT "FK_76e1241c67c7d679c363819b44e" FOREIGN KEY (id_servicio) REFERENCES public.servicio(id);


--
-- TOC entry 2035 (class 2606 OID 42019)
-- Name: FK_7fa2b962d448a87d05b77a1f222; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol_permisos
    ADD CONSTRAINT "FK_7fa2b962d448a87d05b77a1f222" FOREIGN KEY (id_rol) REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2033 (class 2606 OID 41976)
-- Name: FK_98bf89ebf4b0be2d3825f54e56c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT "FK_98bf89ebf4b0be2d3825f54e56c" FOREIGN KEY (id_rol) REFERENCES public.roles(id);


--
-- TOC entry 2036 (class 2606 OID 46208)
-- Name: FK_99104762609317271e2f4e4280c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario_servicio
    ADD CONSTRAINT "FK_99104762609317271e2f4e4280c" FOREIGN KEY (id_servicio) REFERENCES public.servicio(id) ON DELETE CASCADE;


--
-- TOC entry 2037 (class 2606 OID 46213)
-- Name: FK_9da84424f0e0e16776b6441b4ba; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.perfiles_personal
    ADD CONSTRAINT "FK_9da84424f0e0e16776b6441b4ba" FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) ON DELETE CASCADE;


--
-- TOC entry 2045 (class 2606 OID 46233)
-- Name: FK_9fdbb167dafdf4e70e7c4cceaf7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.servicios_evento
    ADD CONSTRAINT "FK_9fdbb167dafdf4e70e7c4cceaf7" FOREIGN KEY (id_personal_asignado) REFERENCES public.perfiles_personal(id);


--
-- TOC entry 2054 (class 2606 OID 49753)
-- Name: FK_a0e5ffd10a6d3543fafd086ae7d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actualizaciones_evento
    ADD CONSTRAINT "FK_a0e5ffd10a6d3543fafd086ae7d" FOREIGN KEY (id_servicio) REFERENCES public.servicio(id);


--
-- TOC entry 2046 (class 2606 OID 46238)
-- Name: FK_afab07800ef3ecd3cba06cb7606; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.servicios_evento
    ADD CONSTRAINT "FK_afab07800ef3ecd3cba06cb7606" FOREIGN KEY (id_equipo_asignado) REFERENCES public.inventario_servicio(id);


--
-- TOC entry 2053 (class 2606 OID 49748)
-- Name: FK_c39146ae51fcdd481bbeb35b636; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actualizaciones_evento
    ADD CONSTRAINT "FK_c39146ae51fcdd481bbeb35b636" FOREIGN KEY (id_evento) REFERENCES public.eventos(id) ON DELETE CASCADE;


--
-- TOC entry 2041 (class 2606 OID 46198)
-- Name: FK_dc8ebcb8385fd13bae6acf7a67e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT "FK_dc8ebcb8385fd13bae6acf7a67e" FOREIGN KEY (id_asesor) REFERENCES public.usuarios(id);


--
-- TOC entry 2039 (class 2606 OID 41712)
-- Name: disponibilidad_personal_id_personal_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disponibilidad_personal
    ADD CONSTRAINT disponibilidad_personal_id_personal_fkey FOREIGN KEY (id_personal) REFERENCES public.perfiles_personal(id);


--
-- TOC entry 2050 (class 2606 OID 41816)
-- Name: oportunidades_id_asesor_asignado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oportunidades
    ADD CONSTRAINT oportunidades_id_asesor_asignado_fkey FOREIGN KEY (id_asesor_asignado) REFERENCES public.usuarios(id);


--
-- TOC entry 2048 (class 2606 OID 41794)
-- Name: pagos_id_cliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.usuarios(id);


--
-- TOC entry 2049 (class 2606 OID 41799)
-- Name: pagos_id_confirmado_por_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_id_confirmado_por_fkey FOREIGN KEY (id_confirmado_por) REFERENCES public.usuarios(id);


--
-- TOC entry 2047 (class 2606 OID 41789)
-- Name: pagos_id_evento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_id_evento_fkey FOREIGN KEY (id_evento) REFERENCES public.eventos(id);


--
-- TOC entry 2056 (class 2606 OID 41879)
-- Name: sesiones_streaming_id_evento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sesiones_streaming
    ADD CONSTRAINT sesiones_streaming_id_evento_fkey FOREIGN KEY (id_evento) REFERENCES public.eventos(id);


--
-- TOC entry 2057 (class 2606 OID 41884)
-- Name: sesiones_streaming_id_operador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sesiones_streaming
    ADD CONSTRAINT sesiones_streaming_id_operador_fkey FOREIGN KEY (id_operador) REFERENCES public.usuarios(id);


--
-- TOC entry 2051 (class 2606 OID 41833)
-- Name: solicitudes_transporte_id_evento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitudes_transporte
    ADD CONSTRAINT solicitudes_transporte_id_evento_fkey FOREIGN KEY (id_evento) REFERENCES public.eventos(id);


--
-- TOC entry 2052 (class 2606 OID 41838)
-- Name: solicitudes_transporte_id_transportista_asignado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitudes_transporte
    ADD CONSTRAINT solicitudes_transporte_id_transportista_asignado_fkey FOREIGN KEY (id_transportista_asignado) REFERENCES public.usuarios(id);


--
-- TOC entry 2190 (class 0 OID 0)
-- Dependencies: 7
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2025-10-12 10:50:36

--
-- PostgreSQL database dump complete
--

