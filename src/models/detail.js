class Detail {
  /**
   *
   * @param {Number} delay Delay time (ms).
   * @param {String} detail Request / Response status and body.
   */
  constructor(delay, detail) {
    this.delay = delay || 0;
    this.detail = detail || '';
  }

  static parse(object) {
    return new Detail(
      object.delay || null,
      object.detail && JSON.stringify(object.detail, null, '    '),
    );
  }
}

export default Detail;
