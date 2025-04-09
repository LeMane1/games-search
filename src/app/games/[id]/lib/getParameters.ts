import {IGameParameter} from "@/app/games/[id]/game-parameters/ui/GameParameters";
import {IDeveloper, IPlatform, IPublisher} from "@/api/types";
import {MONTH_NAMES} from "@/lib/constants";

interface IGameParameters {
  developers?: IDeveloper[];
  publishers?: IPublisher[];
  platforms?: IPlatform[];
  release: string;
  esrb?: string;
  playtime?: number;
}

export const getParameters = (
  {developers,
    publishers,
    platforms,
    release,
    esrb,
    playtime
  }: IGameParameters): IGameParameter[] => {
  
  const developersParameter: IGameParameter = {
    parameterType: 'Developers',
    parameterValue: developers && developers.length ? developers.map((developer:IDeveloper) => developer.name).join(', ') : '-'
  }
  
  const publishersParameter: IGameParameter = {
    parameterType: 'Publishers',
    parameterValue: publishers && publishers.length ? publishers.map((developer:IDeveloper) => developer.name).join(', ') : '-'
  }
  
  const platformsParameter: IGameParameter = {
    parameterType: 'Platforms',
    parameterValue: platforms && platforms.length ? platforms.map((platform:IPlatform) => platform.platform.name).join(', ') : '-'
  }
  
  const date = new Date(release);
  
  const releaseParameter: IGameParameter = {
    parameterType: 'Release Date',
    parameterValue: `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`
  }
  
  const esrbParameter: IGameParameter = {
    parameterType: 'ESRB',
    parameterValue: esrb ? ''+esrb : '-'
  }
  
  const playtimeParameter: IGameParameter = {
    parameterType: 'Average playtime',
    parameterValue: playtime ? ''+playtime+' hours' : '-'
  }
  
  return [
    releaseParameter,
    developersParameter,
    publishersParameter,
    platformsParameter,
    esrbParameter,
    playtimeParameter
  ];
}