--Ennemies table

drop table ennemies;
create table Ennemies(
    IDEN integer not null,
    NameE varchar2(20),
    HealthE integer,
    HealthE_Max integer,
    constraint PK_Ennemies primary key (IDEN)
);

--Weapon types table

drop table typeW;
create table TypeW(
    IDT integer not null,
    NameTW varchar2(20),
    constrain PK_Type primary key (IDT)
);

--Weapons table

drop table weapons;
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

drop table player;
create table Player (
    Username varchar2(20),
    Email varchar2(320), --max size of email adress
    Password varchar2(256), --modify when crypting algorithm is chosen
    HealthP integer,
    HealthP_Max integer,
    Mana integer,
    Mana_Max integer,
    constraint PK_Player primary key (Username),
    constraint FK_Player foreign key (Chosen_Weapon) references Weapon(IDW)
);

--Abilities table

drop table abilities;
create table Abilities (
    IDA integer not null,
    NameA varchar2(20),
    DamageA integer,
    Mana_Cost integer,
    constraint PK_Abilities primary key (IDA)
);

--Outfits table (if enough time)

/*
drop table outfits;
create table Outfits (

);
*/

--Can_Use table (link between Enemies and Abilities tables)

drop table can_use;
create table Can_Use (
    IDA integer,
    IDE integer,
    constraint PK_Can_Use primary key (IDA,ID)
);

--Abilities_Equiped table (link between Player and Abilities tables)

drop table abilities_equiped;
create table Abilities_Equiped (
    IDA integer,
    Username varchar2(20),
    constraint PK_Can_Use primary key (IDA,Username)
);