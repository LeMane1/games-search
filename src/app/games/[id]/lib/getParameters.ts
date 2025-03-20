import {IGameParameter} from "@/app/games/[id]/game-parameters/ui/GameParameters";
import {IDeveloper, IPublisher} from "@/api/types";

const Months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jan', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface IGameParameters {
  developers?: IDeveloper[];
  publishers?: IPublisher[];
  release: string;
  esrb?: string;
}

export const getParameters = (
  {developers,
    publishers,
    release,
    esrb
  }: IGameParameters): IGameParameter[] => {
  
  const developersParameter: IGameParameter = {
    parameterType: 'Developers',
    parameterValue: developers && developers.length ? developers.map((developer:IDeveloper) => developer.name).join(', ') : '-'
  }
  
  const publishersParameter: IGameParameter = {
    parameterType: 'Publishers',
    parameterValue: publishers && publishers.length ? publishers.map((developer:IDeveloper) => developer.name).join(', ') : '-'
  }
  
  const date = new Date(release);
  
  const releaseParameter: IGameParameter = {
    parameterType: 'Release Date',
    parameterValue: `${date.getDate()} ${Months[date.getMonth()]} ${date.getFullYear()}`
  }
  
  const esrbParameter: IGameParameter = {
    parameterType: 'ESRB',
    parameterValue: ''+esrb
  }
  
  return [releaseParameter, developersParameter, publishersParameter, esrbParameter];
}