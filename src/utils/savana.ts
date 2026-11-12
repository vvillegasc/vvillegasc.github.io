// Datos compartidos del proyecto Savana Data Coffee (secciones del hub y enlaces externos).
export const BASE_SAVANA = '/projects/savana-data-coffee';

// Completa estos enlaces cuando los tengas; si quedan vacíos, el botón no se muestra.
export const enlaces = {
	repoFront: '', // ej. https://github.com/vvillegasc/...
	repoBack: '',
	video: '', // URL de YouTube en formato embed: https://www.youtube.com/embed/<id>
};

export const secciones = [
	{ slug: 'gestion', title: 'Gestión del proyecto', description: 'Scrum, stakeholders, EDT, cronograma y presupuesto.' },
	{ slug: 'diseno', title: 'Diseño de la base de datos', description: 'MER, modelo relacional, normalización a 3FN y diccionario de datos.' },
	{ slug: 'algebra', title: 'Álgebra relacional', description: '50 consultas sobre el modelo, de la selección a la división.' },
	{ slug: 'infraestructura', title: 'Infraestructura', description: 'Debian 13 en VMware, PostgreSQL 17 y acceso por Tailscale.' },
	{ slug: 'aplicacion', title: 'Implementación y app web', description: 'Scripts SQL, arquitectura en 3 capas, roles y reglas de negocio.' },
];
