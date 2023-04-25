export type LaunchCardType = {
  id: string
  mission_name: string
  launch_date_unix: number
  details: string

  rocket: {
    rocket_name: string
  },

  links: {
    presskit: string
  }
};
