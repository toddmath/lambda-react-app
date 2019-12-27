exports.handler = async event => {
  const subject = event.wueryStringParameters.name || 'World'
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  }
}
