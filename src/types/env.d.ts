declare global {
	namespace NodeJS {
		interface ProcessEnv {
			[key: string]: string | undefined;
			PORT: string;
			JWT_SECRET_KEY: string;
			ENV: 'dev' | 'production';
		}
	}
}
