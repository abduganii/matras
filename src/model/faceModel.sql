insert into
    admins(admin_name, admin_password)
Values
    ('Ali', '12rge4356');

insert into
    phoneNumber(phoneNumber)
Values
    ('+998 90 123 45 67');

insert into
    ourPlus(
        our_experience,
        our_customer,
        our_warranty,
        our_delivery
    )
Values
    (7, '10K+', 10, 3);

insert into
    cotegory(cotegory)
Values
    ('Madel B');

insert into
    technologies(
        technologie_name,
        technologie_title,
        technologie_video
    )
Values
    (
        'Memoriform',
        'Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc',
        'https://www.youtube.com/watch?v=MibfI0TZgmI'
    );

insert into
    addres(
        address_name,
        address_text,
        address_loc,
        address_image
    )
Values
    ($ 1, $ 2, $ 3, $ 4)
insert into
    products(
        product_name,
        product_img,
        product_price,
        product_weight,
        product_sice,
        product_garian,
        product_suitable,
        product_price_aksiya,
        product_text,
        cotegory_id
    )
Values
    (
        'Ortopedik Eko matras',
        ARRAY ['C:\\Users\\NITRO V\\Desktop\\matras-main\\src\\public\\image 21.png','C:\\Users\\NITRO V\\Desktop\\matras-main\\src\\public\\image 21.png'],
        '1 800 000',
        '130 kg',
        '220 x 114 x 50',
        '6 yil',
        3,
        '0',
        'Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas.',
        2
    );

select
    *
from
    products
where
    is_deleted = false
    and cotegory_id = 2;

insert into
    orders(
        order_name,
        order_phoneNumb,
        order_quantity,
        product_id
    )
Values
    ('Jenny Wilson', '+998 90 123 45 67', 4, 1);