export interface TypeDesignDoodle {
  name: string;
  src: string;
  style?: {
    width?: string;
    height?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  dataCue?: string;
  dataDelay?: string;
}
