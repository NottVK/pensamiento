// Datos de ejemplo de los álbumes
const albums = [
	{
		id: 'Que-te-amo-demasiado',
		title: 'Que te amo demasiado',
		year: 2025,
		image: "img1.jpg",
		description: 'Pos haber resulta que son cositas que dije que te amo.',
		tracks: [
  'que te amo demasiadooooo',
  'me enamore demasiado de ti',
  'quiero estar siempre a tu lado',
  'mi amor por ti cada dia crece muchisimo mas',
  'aun que hemos estado mal y raritos pero eso no quita lo mucho que te amo y lo jucho que me encantas mi amor',
]
	},
	{
		id: 'Lo-hermosa-que-eres',
		title: 'Lo hermosa que eres',
		year: 2025,
		image: "img2.jpg",
		description: 'Son cositas del por que para mi eres my hermosa.',
		tracks: [
  'tu eres muuuy hermosa',
  'estas demasiado lindaaaa',
  'estas bein preciosa',
  'eres una belleza sempiterna',
  'tus personalidades son muy lindas y tiernas y adorables',
  'como tu eres, eres muy tierna y adorableee y hermosaaaa',
  'ufff mi amor y tienes un cuerpo tan hermoso y sexy',
  'una hermosa figura',
  'y mire por donde mire tu cuerpo me encanta demasiadooooo',
  'cada cm de tu cuerpo me encanta',
  'hasta esas partes que te generan cierta inseguridad o no te gustan, yo las amo con todo mi ser y me encantan demasiadooo',
  'para mi eres perfecta y la mujer mas hermosa que hay',
]
	},
	{
		id: 'Anecdotas',
		title: 'Anecdotas',
		year: 2025,
		image: "img3.jpg",
		description: 'Pequeñas anecdotas raritas.',
		tracks: [
  'pos cosas que me han pasado y te he contado, desde golpes, esas veces que me ha dado miedo, cuando estuvimos juntos y asi mi amor',
]
	},
	{
		id: 'Cosas-que-quiero-hacer-contigo',
		title: 'Cosas que quiero hacer contigo',
		year: 2025,
		image: "img4.jpg",
		description: 'Cosas que quiero hacer con mi linda y hermosa novia.',
		tracks: [
  'abrazarte',
  'besarte',
  'tomarte de la manito',
  'salir',
  'cocinar juntitos',
  'bañarnos juntitos',
  'viajar',
  'hacer picnis',
  'tener mucho sexo contigo',
  'casarnos',
  'ver pelis y series juntos',
  'jugar jueguitos juntos',

]
	},
	{
		id: 'Cosas-que-quiero',
		title: 'Cosas que quiero',
		year: 2025,
		image: "img5.jpg",
		description: 'son cositas que quiero tanto de ti y cosas generales.',
		tracks: [
  'te quiero a ti',
  'te deseo a ti',
  'tus chichis',
  'tu cuerpo',
  'tu sangre',
  'tus fluidos',
  'mas fotos tuyas pero demasiadassss',
  'a tiiiii',
  'un spinosaurio',
  'pero lo principal te quiero y necesito solo a tiiiiii, y quiero muchas fotos tuyas pero demasiadassss y audios tuyos',
]
	},
	{
		id: 'Ideas-y-pensamientos-posesivos',
		title: 'Ideas y pensamientos posesivos',
		year: 2025,
		image: "img6.jpg",
		description: 'Que te quiero solo para mi y punto.',
		tracks: [

            'te quiero a ti',
            'pero todo de ti',
            'desde tu tiempo',
            'atencion',
            'todo de ti',
            'no quiero compartirte con nadie',
            'solo quiero que me necesites a mi',
            'solo quiero que hables conmigo e interactues conmigo',
            'por eso te secuestrare de verdad y te tendre solo para mi y punto',
            'no me gusta que las demas personas te vean y escuchen tu voz',
            'osea ni en persona ni en fotos',
            'me disgusta tanto me da rabia',
            'osea que necesidad que mas personas te vean',
            'solo debo verte yo y ya',
            'solo debes existir para mi para que YO solo pueda verte y escucharte',
            'sin que nadie mas pueda verte ni escucharte, pero ni verte en fotos, me da rabia eso',
            'eres solo mia y punto',  
]
	},

    {
		id: 'Y-cositas-que-pense-para-hacer-en-nuestra-relacion',
		title: 'Y cositas que pense para hacer en nuestra relacion',
		year: 2024,
		image: "img7.jpg",
		description: 'Son cositas que he visto que seria lindo hacer.',
		tracks: [
  'me quede pensando en que nosotros na mas nos quedamos en solo textos o llamadas arratos, nos hemos alejado mucho no te niego, y es muy feito, una disculpa por mi parte niña',
  'pero me gustaria volver a lo que ibamos, era lindo pero pss mejorarlo',
  'hacer mas cositas juntos, llamadas, juegos, videollamadas,',
  'cositas en las cuales nos guste hacer a ambos y darle al otro, tipo fotos, dibujos, que se vea la presencia fisica entre ambos, y no solo se base en enviarnos mensajes y que se vuelva en una rutina, si no en que se sienta mas la prsencia de ambos y alimentar lo nuestro dia a dia con esos pequeños detalles y acciones que al final valen mas que cualquier cosa',

  '¿quieres intentarlo mi amor?'
]
	}
];

function renderAlbumGrid(containerId) {
	const container = document.getElementById(containerId);
	if (!container) return;
	container.innerHTML = '';
	albums.forEach((alb, idx) => {
		const art = document.createElement('article');
		// mantener compatibilidad con estilos existentes
		art.className = 'album' + (idx + 1);
		art.innerHTML = `
			<img src="${alb.image}" alt="${alb.title}">
			<h3>${alb.title}</h3>
			<p>${alb.description}</p>
		`;
		art.addEventListener('click', () => {
			location.href = 'album-details.html?album=' + encodeURIComponent(alb.id);
		});
		container.appendChild(art);
	});
}

function renderAlbumDetails(containerId) {
	const container = document.getElementById(containerId);
	if (!container) return;
	const params = new URLSearchParams(location.search);
	const albumId = params.get('album');
	if (!albumId) {
		container.innerHTML = '<p>No se especificó ningún álbum.</p>';
		return;
	}
	const alb = albums.find(a => a.id === albumId);
	if (!alb) {
		container.innerHTML = '<p>Álbum no encontrado.</p>';
		return;
	}
	const tracksHtml = alb.tracks.map((t, i) => `<li>${i+1}. ${t}</li>`).join('');
	container.innerHTML = `
		<div class="album-detail-card" style="max-width:900px;margin:24px auto;background:#fff;padding:20px;border-radius:12px;">
			<a href="album.html" style="display:inline-block;margin-bottom:12px;color:#333;text-decoration:none;">&larr; Volver a álbumes</a>
			<div style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap;">
				<img src="${alb.image}" alt="${alb.title}" style="width:300px;height:300px;object-fit:cover;border-radius:8px;">
				<div style="flex:1;">
					<h2 style="margin-top:0;">${alb.title} <small style="color:#666;font-weight:600">(${alb.year})</small></h2>
					<p style="color:#444">${alb.description}</p>
					<h4>Listado de canciones</h4>
					<ul style="color:#333">${tracksHtml}</ul>
				</div>
			</div>
		</div>
	`;
}

document.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('album-grid')) {
		renderAlbumGrid('album-grid');
	}
	if (document.getElementById('album-details')) {
		renderAlbumDetails('album-details');
	}
});
