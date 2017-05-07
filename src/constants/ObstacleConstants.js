export const SIDE_RAIL_CENTER = 743;
export const SIDE_RAIL_SCALE = 0.28;
export const CENTER_RAIL_SCALE = 0.3;
export const OBSTACLE_VELOCITY_Y = 300;
export const OBSTACLE_VELOCITY_X = 120;

export const RAIL_OPTIONS = ( gameWidth ) => { return [
  {
    x: SIDE_RAIL_CENTER,
    y: 0,
    velocity: {
      y: OBSTACLE_VELOCITY_Y,
      x: -OBSTACLE_VELOCITY_X
    },
    scale: CENTER_RAIL_SCALE
  },
  {
    x: gameWidth / 2,
    y: 0,
    velocity: {
      y: OBSTACLE_VELOCITY_Y,
      x: 0
    },
    scale: CENTER_RAIL_SCALE
  },
  {
    x: gameWidth - SIDE_RAIL_CENTER,
    y: 0,
    velocity: {
      y: OBSTACLE_VELOCITY_Y,
      x: OBSTACLE_VELOCITY_X
    },
    scale: SIDE_RAIL_SCALE,
  }
] };
