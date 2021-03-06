const Joi = require("joi")

module.exports = class FilenameParser {
  constructor(filename) {
    const schema = Joi.object({
      filename: Joi.string().pattern(/^(?:\/\S+\/|\/)\d+-\d+-\d+-\S+\/$/),
    })
    const { error } = schema.validate({ filename })
    if (error) {
      throw error
    }

    this.filename = filename
  }

  year() {
    return this.filename.match(/^(?:\/\S+\/|\/)(\d+)-\d+-\d+-\S+\/$/)[1]
  }

  month() {
    return this.filename.match(/^(?:\/\S+\/|\/)\d+-(\d+)-\d+-\S+\/$/)[1]
  }

  day() {
    return this.filename.match(/^(?:\/\S+\/|\/)\d+-\d+-(\d+)-\S+\/$/)[1]
  }

  title() {
    return this.filename.match(/^(?:\/\S+\/|\/)\d+-\d+-\d+-(\S+)\/$/)[1]
  }
}
