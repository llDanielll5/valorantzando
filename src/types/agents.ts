export interface AllAgentsInterface {
  status: number;
  data: AllAgentsDataInterface[];
}

export interface AgentRoleInterface {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

export interface AgentAbilitiesInterface {
  slot: "Ability1" | "Ability2" | "Grenade" | "Ultimate";
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface AllAgentsDataInterface {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags?: null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: AgentRoleInterface;
  recruitmentData?: null;
  abilities: AgentAbilitiesInterface[];
  voiceLine?: null;
}
