import Layout from '../../layout';

import { User } from '../../../base/interface';
import { ConfirmationDay } from '../../../base/types';

import * as enums from '../../../base/enums/enums';

class ConfirmLayout extends Layout {
  public makeHeader(profile: User) {
    const dayOfWeek = this.getDayOfWeekByConfirmationDay(profile.confirmationDay);

    const container = document.createElement('div');
    container.classList.add('confirm-header');
    container.innerHTML = `
      <div class="confirm-header__greeting">Confirm day! ${dayOfWeek}</div>
      <div class="confirm-header__info">Drag the edge to change the time</div>`;

    return container;
  }

  private getDayOfWeekByConfirmationDay(confirmationDay: ConfirmationDay) {
    const date = new Date();

    const daysOfWeek = [
      enums.DaysOfWeek.sunday,
      enums.DaysOfWeek.monday,
      enums.DaysOfWeek.tuesday,
      enums.DaysOfWeek.wednesday,
      enums.DaysOfWeek.thursday,
      enums.DaysOfWeek.friday,
      enums.DaysOfWeek.saturday,
    ];

    return confirmationDay === enums.ConfirmationDays.today
      ? daysOfWeek[date.getDay()]
      : daysOfWeek[this.getPreviousDayOfWeek(date.getDay())];
  }

  private getPreviousDayOfWeek(dayOfWeek: number) {
    return dayOfWeek - 1 < 0 ? 6 : dayOfWeek - 1;
  }

  public makeConfirmContent() {
    const container = document.createElement('div');
    container.classList.add('confirm-content');

    container.append(this.makeConfirmPlans());
    container.append(this.makeConfirmButton());

    return container;
  }

  private makeConfirmPlans() {
    const container = document.createElement('div');
    container.classList.add('confirm-plans');

    for (let i = 0; i < 10; i += 1) {
      container.append(this.makeConfirmPlan());
    }

    return container;
  }

  private makeConfirmPlan() {
    const container = document.createElement('div');
    container.classList.add('confirm-plan');

    container.innerHTML = `
      <span class="confirm-plan__label">Sleep</span>
      <div class="confirm-plan__time plan-square">8h</div>`;

    return container;
  }

  private makeConfirmButton() {
    const container = document.createElement('div');
    container.classList.add('confirm-buttons');

    container.innerHTML = `<button class="button confirm__main-button">Confirm!</button>`;

    return container;
  }
}

export default ConfirmLayout;
