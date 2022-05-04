CREATE TABLE admins(
    admin_id serial Primary key not null,
    admin_name varchar(60) not null,
    admin_password varchar(70) not null
);

CREATE TABLE phoneNumber(
    phoneNumber_id serial Primary key not null,
    phoneNumber varchar(60) not null
);

CREATE TABLE ourPlus(
    ourPlus_id serial Primary key not null,
    our_experience int not null,
    our_customer varchar(60) not null,
    our_warranty int not null,
    our_delivery int not null
);

CREATE TABLE cotegory(
    cotegory_id serial PRIMARY KEY not null,
    cotegory varchar(60),
    is_deleted boolean default false
);

CREATE TABLE technologies(
    technologie_id serial not null Primary key,
    technologie_name varchar(60) not null,
    technologie_title varchar(200) not null,
    technologie_video varchar(100) not null,
    is_deleted boolean default false
);

CREATE TABLE address (
    address_id serial PRIMARY KEY,
    address_name varchar(120) not null,
    address_text varchar(250) not null,
    address_loc varchar(250) not null,
    address_image text [] not null,
    address_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    is_deleted boolean DEFAULT false
);

CREATE TABLE products(
    product_id serial Primary key not null,
    product_img text [] not null,
    product_name varchar(243) not null,
    product_price varchar(154) not null,
    product_weight varchar(154) not null,
    product_sice varchar(193) not null,
    product_garian varchar(143) not null,
    product_suitable int not null,
    product_price_aksiya varchar(123),
    product_text varchar(432) not null,
    is_active boolean DEFAULT true,
    is_new boolean DEFAULT true,
    is_deleted boolean DEFAULT false,
    product_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    cotegory_id int REFERENCES cotegory(cotegory_id) not null
);

CREATE TABLE orders(
    order_id serial Primary key not null,
    order_name varchar(213) not null,
    order_phoneNumb varchar(92) not null,
    order_quantity int not null,
    is_call boolean DEFAULT false,
    is_deleted boolean DEFAULT false,
    product_id int REFERENCES products(product_id) null null
);