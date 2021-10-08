// PLEASE KEEP THIS ALPHABETICAL
export const Color = {
  azureRadiance: '#1076F7',
  iron: '#D9DADB',
  lightGray: '#dadada',
  jungleGreen: '#229E81',
  mercury: '#e5e5e5',
  prussianBlue: '#002553',
  royalBlue: '#3141eb',
  scienceBlue: '#085AC1',
  shamrock: '#34CBA7',
  white: '#ffffff',
};

export const Border = {
  iron: `solid 1px ${Color.iron}`,
  royalBlue: `solid 0.25rem ${Color.royalBlue}`,
  mercury: `solid 0.1rem ${Color.mercury}`,
};

const theme = {
  colors: Color,
  border: Border,
};

export default theme;
