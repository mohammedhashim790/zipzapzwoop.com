
# ZipZapZwoop

**ZipZapZwoop** is a web application built to help designers and their clients send, track, and approve large files efficiently.

---

## Features

- Upload and share large files with clients or colleagues
- Track delivery and download status
- Designer-client approval workflow
- End-to-end bootstrapped by a single developer

---

## Technology Stack

- **Frontend:** Angular
- **Backend:** AWS Lambda
- **Database:** AWS DynamoDB
- **Storage:** AWS S3
- **Hosting:** AWS S3(Serverless deployment), CloudFront and Route53

---

## Installation

1. **Clone the repository**  

```bash
git clone https://github.com/mohammedhashim790/zipzapzwoop.com.git
cd zipzapzwoop
````

2. **Install frontend dependencies**

```bash
npm install
```

3. **Set up AWS environment**

* Configure AWS CLI
* Set up S3 buckets and DynamoDB tables
* Deploy Lambda functions

4. **Run locally**

```bash
ng serve
```

Visit `http://localhost:4200` to see the app running locally.

---

## Usage

1. Upload files through the web interface
2. Share the file link with clients or colleagues
3. Track delivery and approval status in real time

---

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for details.

---

