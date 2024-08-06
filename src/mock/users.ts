// import bcrypt from 'bcrypt';

interface User {
	email: string;
	password: string;
	name: string;
}

let users: User[] = [{ email: 'test@gmail.com', password: 'test1234', name: 'admin' }];

const getUsers = () => users;

const createUser = ({ email, password, name }: User) => {
	users = [...users, { email, password, name }];
};

const findUser = ({ email, password }: Omit<User, 'name'>) => {
	// users.find(user => user.userid === userid && bcrypt.compareSync(password, user.password));
	return users.find(user => user.email === email && user.password === password);
};

const findUserByEmail = (email: string) => {
	return users.find(user => user.email === email);
};

export { users, getUsers, createUser, findUser, findUserByEmail };
