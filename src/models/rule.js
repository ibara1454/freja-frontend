import Detail from '@/models/detail';
import uuidv4 from 'uuid/v4';

class Rule {
  /**
   *
   * @param {RegExp} matcher
   * @param {Detail?} request
   * @param {Detail?} response
   */
  constructor(matcher, request, response) {
    this.id = uuidv4();
    this.matcher = matcher;
    this.request = request || new Detail();
    this.response = response || new Detail();
  }

  static parse(object) {
    return new Rule(
      object.matcher,
      Detail.parse(object.request),
      Detail.parse(object.response)
    );
  }
}

export default Rule;
