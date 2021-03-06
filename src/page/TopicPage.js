import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { RefreshFlatList, Loading } from "../components";
import { HttpUtils } from "../utils";

export default class TopicPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    };
  }
  componentDidMount() {
    // this._flatList.initDatas();
  }

  _fetchRequest = pageno => {
    let sid = this.props.sid;
    if (this.props.navigation) {
      const { state } = this.props.navigation;
      if (state && state.params) {
        sid = state.params.sid;
      }
    }
    return HttpUtils.get("Topic/SaleTop", {
      t: sid,
      pageno: pageno
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RefreshFlatList
          ref={flat => (this._flatList = flat)}
          fetchRequest={this._fetchRequest}
          navigation={this.props.navigation}
        />
        <Loading ref={load => (this._loading = load)} />
      </View>
    );
  }
}
