--Enemies table

create table if not exists Enemies(
    IDEN serial unique,
    NameE varchar(20),
    HealthE_Max integer,
    primary key (IDEN)
);

--Weapon types table

create table if not exists TypeW(
    IDT serial unique,
    NameTW varchar(20),
    primary key (IDT)
);

--Fate table

create table if not exists Fate(
    IDF serial unique,
    NameF varchar(20),
    primary key (IDF)
);

--Weapons table

create table if not exists Weapons(
    IDW serial unique,
    NameW varchar(20),
    DamageW integer,
    Xp integer,
    Xp_Max integer,
    Fate_Level integer,
    Weapon_Type integer,
    primary key (IDW),
    constraint FK_Weapons1 foreign key (Weapon_Type) references TypeW(IDT),
    constraint FK_Weapons2 foreign key (Fate_Level) references Fate(IDF)
);

--Outfits table (if enough time)

create table if not exists Outfits (
    IDO serial unique,
    NameO varchar(20),
    Sprite varchar(50),
    primary key (IDO)
);

--Player table

create table if not exists Player (
    Username varchar(20),
    Email varchar(320), --max size of email adress
    Password varchar(256), --modify when crypting algorithm is chosen
    HealthP_Max integer,
    Mana_Max integer,
    Chosen_Weapon integer,
    Chosen_Outfit integer,
    primary key (Username),
    constraint FK_Player1 foreign key (Chosen_Weapon) references Weapons(IDW),
    constraint FK_Player2 foreign key (Chosen_Outfit) references Outfits(IDO)
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
    primary key (IDA,IDE)
);

--Weapon_Skills table (link between Weapons and Abilities tables)

create table if not exists Weapon_Skills (
    IDA integer,
    IDW integer,
    primary key (IDA,IDW)
);