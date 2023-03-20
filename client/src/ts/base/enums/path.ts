const enum Path {
  origin = 'http://localhost:5100/api',
  registration = '/registration',
  login = '/login',
  logout = '/logout',
  plans = '/plans',
  update = '/update',
  get = '/get',
  weekDistribution = '/weekDistribution',
  adjustPlan = '/adjustPlan',
  users = '/users',
  profile = '/profile',
  statistics = '/statistics',
  dayDistribution = '/dayDistribution',
  thoughts = '/thoughts',
  home = '/',
  confirmDay = '/confirmDay',
  isDayConfirmed = '/isDayConfirmed',
  convertToPlan = '/convertToPlan',
}

export default Path;
