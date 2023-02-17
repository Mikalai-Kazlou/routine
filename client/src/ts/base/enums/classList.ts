const enum ClassList {
  mainContainer = 'main__container',
  mainContainerHide = 'main__container_hide',
  banner = 'banner',
  imgContainer = 'img-container',
  scaleNormal = 'scale-normal',
  // 404
  page404 = 'page-404',
  page404text = 'page-404__text',
  page404title = 'page-404__title',
  // Popup
  popup = 'popup',
  popupShow = 'popup_show',
  // Sign in
  signForm = 'sign-form',
  signIn = 'sign-form_sign-in',
  signUp = 'sign-form_sign-up',
  signTitle = 'sign-form__title',
  signInput = 'sign-form__input',
  signInputBox = 'sign-form__input-box',
  signLabel = 'sign-form__label',
  signLabelText = 'sign-form__label-text',
  signPassword = 'sign-password',
  bigO = 'sign-form__big-o',
  smallO = 'sign-form__small-o',
  signLink = 'sign-form__link',
  signInButton = 'sign-form__button',
  signInButtonText = 'sign-form__button-text',
  signInView = 'sign-in-view',
  signUpView = 'sign-up-view',
  inputError = 'sign-form__input-error',
  inputErrorActive = 'sign-form__input-error_active',
  // Plans
  planContainer = 'plan',
  weekLine = 'plan__week-line',
  infoTextContainer = 'plan__text-container',
  infoTextValue = 'plan__text-value',
  planBody = 'plan__body',
  planTools = 'plan__tools',
  planButtons = 'plan__buttons',
  planAddButton = 'plan__button-add',
  planAddButtonDarg = 'plan__button-add_drag',
  planAddButtonValue = 'plan__button-add-value',
  planRemoveZone = 'plan__remove',
  planRemoveZoneDrag = 'plan__remove_drag',
  planRemoveZoneOver = 'plan__remove_over',
  planDaysContainer = 'plan__days',
  planDaysContainerDrag = 'plan__days_drag',
  planDay = 'plan__day',
  planDayOver = 'plan__day_over',
  planDayLine = 'plan__day-line',
  planDayName = 'plan__day-name',
  planDayHours = 'plan__day-hours',
  planField = 'plan__field',
  planAddButtonName = 'plan__button-add-name',
  weekendFields = 'weekend-fields',
  weekendFieldsBig = 'weekend-fields__big',
  weekendFieldsSmall = 'weekend-fields__small',
  planRound = 'plan-round',
  planRoundBlur = 'plan-round__blur',
  planRoundVal = 'plan-round__value',
  planRoundDrag = 'plan-round_drag',
  // Editor
  editor = 'editor',
  editorTools = 'editor__tools',
  editorTitle = 'editor__title',
  editorText = 'editor__text',
  editorButton = 'editor__button',
  editorColorPicker = 'editor__color-picker',
  editorColorBox = 'editor__color-box',
  editorColorBoxActive = 'editor__color-box_active',
  editorColorRound = 'editor__color-round',
  editorSaveIcon = 'editor__save-icon',
  // time container
  timeContainer = 'time-container',
  timeContainerSlider = 'time-container__slider',
  timeContainerTimeInput = 'time-container__time-input',
  timeContainerTimeLabel = 'time-container__time-label',
  timeContainerPer = 'time-container__per',
  timeContainerPerVal = 'time-container__per-val',
  // slider popup
  sliderPopup = 'slider-popup',
  // day page
  dayPageContainer = 'day-page__container',
  dayPageNavButtons = 'day-page__nav-buttons',
  dayPageBody = 'day-page__body',
  dayPageInfo = 'day-page__info',
  dayPageName = 'day-page__name',
  dayPageField = 'day-page__field',
  dayPageTools = 'day-page__tools',
  dayPageReturn = 'day-page__return',
  dayPageReturnOver = 'day-page__return_over',
  dayPagePlansZone = 'day-page__plans-zone',
  // timeline
  timeline = 'timeline',
  timelineDrag = 'timeline_drag',
  timelineHeader = 'timeline-header',
  timelineDiv = 'timeline-div',
  timelineDivFake = 'timeline-div_fake',
  timelineDivFrom = 'timeline-div__from',
  timelineDivTo = 'timeline-div__to',
  timelineDivLeft = 'timeline-div__left',
  timelineDivRight = 'timeline-div__right',
  timelineDivName = 'timeline-div__name',
  //
  planList = 'plan-list',
  planListItem = 'plan-list__item',
  planListColor = 'plan-list__color',
  planListName = 'plan-list__name',
  planListDur = 'plan-list__dur',
}

const enum HomePageClassList {
  section = 'section',
  canvas = 'canvas',
  thought = 'thought',
  thoughtTitle = 'thought__title',
  thoughtAdd = 'thought__add',
  thoughtItem = 'thought__item',
  thoughtAddBtn = 'thought__add-btn',
  thoughtCreateBtn = 'thought__create-btn',
  thoughtInput = 'thought__input',
  plan = 'plan-btn',
  signIn = 'sign-in',
  chart = 'chart',
  toDo = 'to-do',
  toDoTitle = 'to-do__title',
  toDoTextarea = 'to-do__textarea',
  clock = 'clock',
  hour = 'hour',
  hourCircle = 'hour__circle',
  minutes = 'minutes',
  minutesCircle = 'minutes__circle',
  dayInfo = 'day-info',
  dayIcon = 'day-info__icon',
  none = 'none',
}

const enum ProfilePageClassList {
  profile = 'profile',
  profileWrapper = 'profile-wrapper',
  button = 'button',
  settingsConfirmDay = 'settings__confirm-day',
  settingsConfirmTime = 'settings__confirm-time',
  settingsLogOut = 'settings__log-out',
  settingsLabel = 'settings__label',
  settingsInput = 'settings__input',
  settingsButton = 'settings__button',
  settingsButtonCapitalized = 'settings__button_capitalized',
  userData = 'user-data',
  statistics = 'statistics',
  greeting = 'greeting',
  greetingHello = 'greeting__hello',
  greetingInfo = 'greeting__info',
  statisticsTank = 'statistics-tank',
  statisticsTankName = 'statistics-tank__name',
  statisticsTankContent = 'statistics-tank__content',
  planSquare = 'plan-square',
  planSquareName = 'plan-square__name',
  planSquareDeviation = 'plan-square__deviation',
}

const enum ConfirmPageClassList {
  confirm = 'confirm',
  confirmWrapper = 'confirm-wrapper',
}

export { ClassList, HomePageClassList, ProfilePageClassList, ConfirmPageClassList };
