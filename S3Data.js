class S3Data {
  constructor(file_name, json_data) {
    let json_data = {
      Bucket: process.env.S3_BUCKET_NAME || 'liff-reserve-data',
      Key: file_name,
      Body: JSON.stringify(data),
      ContentType: 'application/json'
    }
  }

  get json_data() {
    return this.json_data
  }

  put_s3() {
    try {
      s3.putObject(this.json_data)
      context.done()
    } catch (err) {
      context.failed(err)
    }
    s3.putObject(this.json_data), (err, data) => {
        if (err) {
          console.log(err, err.stack);
          context.failed()
        }
        context.done()
    };
  }

}