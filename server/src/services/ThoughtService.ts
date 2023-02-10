import Thought from '../schemas/Thought';
import PlanService from './PlanService';
import { ClientError } from '../common/errors';
import * as Type from '../common/types';
import { Types } from 'mongoose';

class ThoughtService {
  async get(userId: Types.ObjectId) {
    return await Thought.find({ userId: userId });
  }

  async getById(userId: Types.ObjectId, id: Types.ObjectId) {
    if (!id) {
      throw new ClientError('ID not specified');
    }
    return await Thought.findById(id).where({ userId: userId });
  }

  async create(userId: Types.ObjectId, item: Type.TThought) {
    const clone = Object.assign({}, item);
    clone.userId = userId;
    return await Thought.create(clone);
  }

  async update(userId: Types.ObjectId, item: Type.TDBThought) {
    if (!item._id) {
      throw new ClientError('ID not specified');
    }
    const itemForUpdate = {
      title: item.title,
    };
    return await Thought.findByIdAndUpdate(item._id, itemForUpdate, { new: true }).where({ userId: userId });
  }

  async transferToPlan(userId: Types.ObjectId, id: Types.ObjectId) {
    if (!id) {
      throw new ClientError('ID not specified');
    }
    const thought = await this.delete(userId, id);
    if (thought) {
      const plan: Type.TPlan = {
        userId: thought.userId,
        title: thought.title,
        text: '',
        color: '#000000',
        duration: 15,
      };
      return await PlanService.create(userId, plan);
    }
    return null;
  }

  async delete(userId: Types.ObjectId, id: Types.ObjectId) {
    if (!id) {
      throw new ClientError('ID not specified');
    }
    return await Thought.findByIdAndDelete(id).where({ userId: userId });
  }
}

export default new ThoughtService();
