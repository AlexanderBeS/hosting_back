const User = require('/models/users');
const Order = require('/models/orders');
const HostingTariffs = require('/models/hostingTariffs');

Order.hasOne(HostingTariffs, {
    foreignKey: 'tariff_id'
});

User.hasOne(Order, {
    foreignKey: 'order_id', sourceKey: 'id'
})

Order.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(Order, {
    foreignKey: 'order_id', sourceKey: 'id'
})

module.export = {User, Order, HostingTariffs}
