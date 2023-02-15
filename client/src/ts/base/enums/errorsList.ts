const enum ErrorsList {
  elementNotFound = 'Ups! This element is not found!',
  elementIsNotInput = 'Ups! This element is not input!',
  elementIsNotButton = 'Ups! This element is not button!',
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
  freeYourWeekTime = 'Less than 15 minutes left\n\n Free up your WEEK time',
  freeYourDayTime = 'Less than 15 minutes left\n\n Free up your DAY time',
  thisPlanIsDist = 'This plan is fully distributed',
  noLogin = 'no login',
  noId = 'no id',
}

export default ErrorsList;
