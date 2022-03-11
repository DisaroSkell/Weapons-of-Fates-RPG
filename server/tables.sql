drop database if exists WOF_RPG;
create database WOF_RPG;

--Ennemies table

drop table if exists ennemies;
create table Ennemies(
    IDEN integer not null,
    NameE varchar2(20),
    HealthE integer,
    HealthE_Max integer,
    constraint PK_Ennemies primary key (IDEN)
);

--Weapon types table

drop table if exists typeW;
create table TypeW(
    IDT integer not null,
    NameTW varchar2(20),
    constrain PK_Type primary key (IDT)
);

--Weapons table

drop table if exists weapons;
create table Weapons(
    IDW integer not null,
    NameW varchar2(20),
    DamageW integer,
    Xp integer,
    Xp_Max integer,
    Level integer,
    constraint PK_Weapons primary key (IDW),
    constraint FK_Weapons foreign key (Weapon_Type) references TypeW(IDT)
);

--Char table

drop table if exists player;
create table Player (
    Username varchar2(20),
    Email varchar2(320), --max size of email adress
    Password varchar2(256), --modify when crypting algorithm is chosen
    HealthP integer,
    HealthP_Max integer,
    Mana integer,
    Mana_Max integer,
    constraint PK_Player primary key (Username),
    constraint FK_Player1 foreign key (Chosen_Weapon) references Weapons(IDW),
    constraint FK_Player2 foreign key (Chosen_Outfit) references Outfits(IDO)
);

--Abilities table

drop table if exists abilities;
create table Abilities (
    IDA integer not null,
    NameA varchar2(20),
    DamageA integer,
    Mana_Cost integer,
    constraint PK_Abilities primary key (IDA)
);

--Outfits table (if enough time)

drop table if exists outfits;
create table Outfits (
    IDO integer not null,
    NameO varchar2(20),
    --Stock an image (how ?)
);

--Can_Use table (link between Enemies and Abilities tables)

drop table if exists can_use;
create table Can_Use (
    IDA integer,
    IDE integer,
    constraint PK_Can_Use primary key (IDA,ID)
);

--Weapon_Skills table (link between Weapons and Abilities tables)

drop table if exists weapon_skills;
create table Weapon_Skills (
    IDA integer,
    IDW integer,
    constraint PK_Weapon_Skills primary key (IDA,IDW)
);