const enum ErrorsList {
  elementNotFound = 'Ups! This element is not found!',
  elementIsNotInput = 'Ups! This element is not input!',
  defaultInputError = 'Wrong value',
  wrongName = 'from 2 to 50 characters',
  wrongPass = 'wrong password',
  wrong1Pass = 'from 4 characters',
  wrong2Pass = 'password mismatch',
  wrongEmail = 'this is not email',
  noUser = "cant't find this account",
  existUser = 'this user already exist',
  notFound = '404',
  needLogin = '401',
  badRequest = '400',
  minToHourError = 'Wrong value in minToHour fn',
  notStandardColor = 'This color is not standard',
  cantBeEmpty = "Can't be empty!",
  wrongElementName = 'Wrong element name',
  freeYourTime = 'Free up your time before adding a plan',
  noLogin = 'no login',
}

export default ErrorsList;
