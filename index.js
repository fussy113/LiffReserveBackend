/*
    Liffから送られてくるデータをS3にテキストで保存する。
    data: {
        user_id: String
        choice_num: Integer
        created_at: datetime
    }
*/

const aws = require('aws-sdk')
aws.config.region = 'ap-northeast-1';
const s3 = new aws.S3();

// let querystring = require('querystring')

exports.handler = function(event, context) {
    // const S3_BUCKET_NAME = 'liff_reserve_data'
    let post_data = JSON.stringify(event.reserve_data)
    context.succeed(post_data)
}
