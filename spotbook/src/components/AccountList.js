import React, { Component } from "react";
import { Table } from "reactstrap";
import NewAccountModal from "./NewAccountModal";


class AccountList extends Component {
    render() {
        const accounts = this.props.accounts;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!accounts || accounts.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        accounts.map(account => (
                            <tr key={account.id}>
                                <td>{account.username}</td>
                                <td>{account.email}</td>
                                <td align="center">
                                    <NewAccountModal
                                        create={false}
                                        account={account}
                                        resetState={this.props.resetState}
                                    />
                                    &nbsp;&nbsp;
                                </td>
                            </tr>
                        ))
                    )};    
                </tbody>
            </Table>
        );
    }
}

export default AccountList;