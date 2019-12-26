module.exports = ({
  GOOGLE_PRIVATE_KEY,
  GOOGLE_PRIVATE_KEY_ID,
  GOOGLE_PROJECT_ID,
  GOOGLE_CLIENT_ID,
  GOOGLE_DRIVE_NAME,
}) => ({
  type: 'service_account',
  project_id: GOOGLE_PROJECT_ID,
  private_key_id: GOOGLE_PRIVATE_KEY_ID,
  private_key: GOOGLE_PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
  client_email: `${GOOGLE_DRIVE_NAME}@albert-wbs.iam.gserviceaccount.com`,
  client_id: GOOGLE_CLIENT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${GOOGLE_DRIVE_NAME}%40${GOOGLE_PROJECT_ID}.iam.gserviceaccount.com`,
});
