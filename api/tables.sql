--Rarity table

create table if not exists Rarity (
    IDR serial unique,
    NameR varchar(20),
    primary key (IDR)
);

--Weapon Types table

create table if not exists TypeW (
    IDT serial unique,
    NameTW varchar(20),
    primary key (IDT)
);

--Enemies table

create table if not exists Enemies (
    IDE serial unique,
    NameE varchar(20),
    Health_MaxE integer,
    Xp_Reward integer,
    Gold_Reward integer,
    Power integer,
    Strength integer,
    Weekness integer,
    constraint FK_Enemies1 foreign key (Power) references Rarity(IDR),
    constraint FK_Enemies1 foreign key (Strength) references TypeW(IDT),
    constraint FK_Enemies3 foreign key (Weekness) references TypeW(IDT),
    primary key (IDE)
);

--Fate table

create table if not exists Fate (
    IDF serial unique,
    NameF varchar(20),
    DescF varchar(500),
    primary key (IDF)
);

--Weapons table

create table if not exists Weapons (
    IDW serial unique,
    NameW varchar(20),
    DamageW integer,
    Xp_Max integer,
    Weapon_Type integer,
    Rarity integer,
    primary key (IDW),
    constraint FK_Weapons1 foreign key (Weapon_Type) references TypeW(IDT),
    constraint FK_Weapons2 foreign key (Rarity) references Rarity(IDR)
);

--Outfits table (if enough time)

create table if not exists Outfits (
    IDO serial unique,
    NameO varchar(20),
    Sprite varchar(50),
    Price integer,
    primary key (IDO)
);

--Player table

create table if not exists Player (
    Username varchar(20),
    Email varchar(320), --max size of email adress
    Password varchar(256), --modify when crypting algorithm is chosen
    Health_MaxP integer,
    Current_Health integer,
    Mana_Max integer,
    Current_Mana integer,
    Gold_Purse integer,
    Chosen_Weapon integer,
    Chosen_Outfit integer,
    Chosen_Ability1 integer,
    Chosen_Ability2 integer,
    primary key (Username),
    constraint FK_Player1 foreign key (Chosen_Weapon) references Weapons(IDW),
    constraint FK_Player2 foreign key (Chosen_Outfit) references Outfits(IDO),
    constraint FK_Player3 foreign key (Chosen_Ability1) references Abilities(IDA),
    constraint FK_Player4 foreign key (Chosen_Ability2) references Abilities(IDA)
);

--Abilities table

create table if not exists Abilities (
    IDA serial unique,
    NameA varchar(20),
    DamageA integer,
    Mana_Cost integer,
    primary key (IDA)
);

--Can_Use table (link between Enemies and Abilities tables)

create table if not exists Can_Use (
    IDA integer,
    IDE integer,
    Use_Prio integer,
    primary key (IDA,IDE)
);

--Weapons_Inventory table (link between Player and Weapons tables)

create table if not exists Weapons_Inventory (
    IDW integer,
    IDP integer,
    Xp integer,
    FOOTs_Won integer,
    Fate_Level,
    primary key (IDW,IDP),
    constraint FK_Weapons_Inventory foreign key (Fate_Level) references Fate(IDF)
);

--Outfit_Inventory table (link between Player and Outfit tables)

create table if not exists Outfit_Inventory (
    IDO integer,
    IDP integer,
    primary key (IDO,IDP)
);

--Abilities_Inventory table (link between Player and Abilities tables)

create table if not exists Abilities_Inventory (
    IDA integer,
    IDP integer,
    primary key (IDA,IDP)
)