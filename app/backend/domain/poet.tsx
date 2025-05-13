import { Environment } from './environment';
import { Poem } from './poem';

export interface Poet {
  name: string;
  composeHaiku(env: Environment): Promise<Poem>;
}
