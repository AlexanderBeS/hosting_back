const User = require('./users');
const Order = require('./orders');
const HostingTariff = require('./hostingTariffs');

// Order.hasOne(HostingTariffs, {
//     foreignKey: 'tariff_id'
// });
//
User.hasOne(Order, {
    foreignKey: 'id', sourceKey: 'order_id'
})

Order.belongsTo(User, {
    foreignKey: 'user_id'
});
//
// Order.hasOne(User, {
//     foreignKey: 'user_id'
// })

module.exports = { User, Order, HostingTariff }
