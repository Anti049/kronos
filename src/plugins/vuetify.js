import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// darkest: 1A1D28
// dark: 222533
// normal: 292D3E
// light: 3B4057
// accent: B989DA

export default new Vuetify({
	theme: {
		enable: true,
		options: {
			customProperties: true,
		},
		themes: {
			dark: {
				primary: {
					darken2: '#1A1D28',
					darken1: '#222533',
					base: '#292D3E',
				},
				secondary: '#3B4057',
				accent: {
					darken1: '#8E6DAB',
					base: '#B989DA',
				},
				error: '#FF5370',
				info: '#0493D9',
				success: '#9FD271',
				warning: '#E99727',
			},
		},
	},
	icons: {
		iconfont: 'mdi',
	},
});
