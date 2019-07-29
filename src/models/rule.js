import Override from '@/models/detail';

class Rule {
  /**
   *
   * @param {RegExp} matcher
   * @param {Override?} request
   * @param {Override?} response
   */
  constructor(matcher, request, response) {
    this.matcher = matcher;
    this.request = request || new Override();
    this.response = response || new Override();
  }

  static parse(object) {
    return new Rule(
      object.matcher,
      Override.parse(object.request),
      Override.parse(object.response)
    );
  }
}

export default Rule;
