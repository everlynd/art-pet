import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
	@IsString({ message: 'Должно быть строковым значением' })
	@IsEmail({}, { message: 'Должно быть email' })
	readonly email: string;

	@IsString({ message: 'Должно быть строковым значением' })
	@Length(4, 16, { message: 'Не меньше 4 символов и не больше 16' })
	readonly password: string;
}