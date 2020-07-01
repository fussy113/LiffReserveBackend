/*
    Liffから送られてくるデータをS3にテキストで保存する。
    data: {
        user_id: String
        choice_num: Integer
        created_at: datetime
    }
*/

const aws = require('aws-sdk')
const s3 = new aws.S3({ apiVersion: '2006-03-01' })

aws.config.region = 'ap-northeast-1'

exports.handler = async (event, context, callback) => {
  let post_data = {
    Bucket: process.env.S3_BUCKET_NAME || 'liff-reserve-data',
    Key: event.reserve_data.user_id + '.json',
    Body: JSON.stringify(event.reserve_data),
    ContentType: 'application/json',
    ACL: 'public-read-write'
  }
  try {
    let putResult = await s3.putObject(post_data).promise()
  } catch (err) {
    console.log(err, err.stack);
    context.fail()
  }
  console.log('success', post_data)
  context.done()
}
