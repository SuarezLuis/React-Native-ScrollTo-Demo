/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  scrollToTop = () => {
    this.refs.scrollArea.scrollTo({x: 0, y: 0});
  };
  scrollToBottom = () => {
    this.refs.scrollArea.scrollToEnd();
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 4, backgroundColor: 'white'}}>
            <View>
              <Button
                title="Touch me to scroll to top"
                onPress={() => this.scrollToTop()}
              />
              <Button
                title="Touch me to scroll to bottom"
                onPress={() => this.scrollToBottom()}
              />
            </View>
          </View>
          <View style={{flex: 1, backgroundColor: 'gray'}}>
            <ScrollView ref="scrollArea">
              <View style={{alignItems: 'center'}}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
                <Text>6</Text>
                <Text>7</Text>
                <Text>8</Text>
                <Text>9</Text>
                <Text>10</Text>
                <Text>11</Text>
                <Text>12</Text>
                <Text>13</Text>
                <Text>14</Text>
                <Text>15</Text>
                <Text>16</Text>
                <Text>17</Text>
                <Text>18</Text>
                <Text>19</Text>
                <Text>20</Text>
                <Text>21</Text>
                <Text>22</Text>
                <Text>23</Text>
                <Text>24</Text>
                <Text>25</Text>
                <Text>26</Text>
                <Text>27</Text>
                <Text>28</Text>
                <Text>29</Text>
                <Text>30</Text>
                <Text>30</Text>
                <Text>31</Text>
                <Text>32</Text>
                <Text>33</Text>
                <Text>34</Text>
                <Text>35</Text>
                <Text>36</Text>
                <Text>37</Text>
                <Text>38</Text>
                <Text>39</Text>
                <Text>40</Text>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
